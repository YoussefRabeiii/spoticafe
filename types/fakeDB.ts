interface PlaylistProps {
  tracks?: Array<TrackProps>;
  playable?: boolean;
}

interface TrackProps {
  album: {
    album_type: string;
    artists: Array<{
      name: string;
    }>;
    id: string;
    images: Array<{
      height: number;
      url: string;
      width: number;
    }>;
    name: string;
  };

  duration_ms: number;
  plays: number;
  explicit: boolean;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  artists: Array<{
    name: string;
  }>;
}
