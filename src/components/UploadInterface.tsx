import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Upload, Video, Image, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const UploadInterface = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [isShorts, setIsShorts] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [uploading, setUploading] = useState(false);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleThumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnailFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile || !title.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please select a video file and enter a title",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      // Upload video file
      const videoFileName = `${user.id}/${Date.now()}_${uploadedFile.name}`;
      const { data: videoData, error: videoError } = await supabase.storage
        .from('videos')
        .upload(videoFileName, uploadedFile);

      if (videoError) throw videoError;

      // Upload thumbnail if provided
      let thumbnailUrl = null;
      if (thumbnailFile) {
        const thumbnailFileName = `${user.id}/${Date.now()}_${thumbnailFile.name}`;
        const { data: thumbnailData, error: thumbnailError } = await supabase.storage
          .from('thumbnails')
          .upload(thumbnailFileName, thumbnailFile);

        if (thumbnailError) throw thumbnailError;

        const { data: thumbnailPublicData } = supabase.storage
          .from('thumbnails')
          .getPublicUrl(thumbnailData.path);
        
        thumbnailUrl = thumbnailPublicData.publicUrl;
      }

      // Get video public URL
      const { data: videoPublicData } = supabase.storage
        .from('videos')
        .getPublicUrl(videoData.path);

      // Save video metadata to database
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      const { error: insertError } = await supabase
        .from('videos')
        .insert({
          user_id: user.id,
          title: title.trim(),
          description: description.trim() || null,
          video_url: videoPublicData.publicUrl,
          thumbnail_url: thumbnailUrl,
          is_shorts: isShorts,
          tags: tagsArray.length > 0 ? tagsArray : null
        });

      if (insertError) throw insertError;

      toast({
        title: "Video uploaded successfully!",
        description: "Your video has been uploaded and is now available."
      });

      // Reset form
      setUploadedFile(null);
      setThumbnailFile(null);
      setTitle("");
      setDescription("");
      setTags("");
      setIsShorts(false);

      // Navigate to home
      navigate('/');

    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message || "An error occurred while uploading your video",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upload Video</h1>
        <p className="text-muted-foreground">Share your content with the world</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Area */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            {!uploadedFile ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Drag & drop your video here
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Or click to browse files
                    </p>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="video-upload"
                    />
                    <Button asChild>
                      <label htmlFor="video-upload" className="cursor-pointer">
                        Select Video
                      </label>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Selected File</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setUploadedFile(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Video className="w-6 h-6 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Video Details Form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="w-5 h-5" />
              Video Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="Enter video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-secondary border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell viewers about your video"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-secondary border-border resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="javascript, react, tutorial, coding"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="bg-secondary border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <input
                type="file"
                accept="image/*"
                id="thumbnail"
                onChange={handleThumbnailSelect}
                className="hidden"
              />
              <label
                htmlFor="thumbnail"
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors bg-secondary"
              >
                {thumbnailFile ? (
                  <div className="text-center">
                    <Image className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-foreground">{thumbnailFile.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {(thumbnailFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload thumbnail</p>
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG (max 5MB)</p>
                  </div>
                )}
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-shorts rounded flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">Upload as Shorts</p>
                  <p className="text-sm text-muted-foreground">
                    For vertical videos under 60 seconds
                  </p>
                </div>
              </div>
              <Switch checked={isShorts} onCheckedChange={setIsShorts} />
            </div>

            <Button 
              onClick={handleUpload}
              disabled={uploading || !uploadedFile || !title.trim()}
              className="w-full bg-primary hover:bg-primary/90" 
              size="lg"
            >
              <Upload className="w-4 h-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload Video'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};