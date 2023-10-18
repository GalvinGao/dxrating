import clsx from "clsx";
import { FC } from "react";

export const DXRank: FC<{ rank?: string | null; className?: string }> = ({
  rank,
  className,
}) => {
  const image = `https://dxrating-assets.imgg.dev/images/rank/${rank}.png`;

  return image ? (
    <img src={image} className={clsx("aspect-w-128 aspect-h-60", className)} />
  ) : (
    <div
      className={clsx(
        "aspect-w-128 aspect-h-60 bg-gray-200 rounded",
        className,
      )}
    />
  );
};
