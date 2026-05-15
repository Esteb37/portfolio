import type { VideoEmbed } from "@/lib/types";

type Props = {
  video: VideoEmbed;
};

export default function VideoEmbedView({ video }: Props) {
  if (video.kind === "youtube") {
    const src = `https://www.youtube-nocookie.com/embed/${video.src}?rel=0&modestbranding=1`;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={src}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
      <video
        src={video.src}
        title={video.title}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full"
      />
    </div>
  );
}
