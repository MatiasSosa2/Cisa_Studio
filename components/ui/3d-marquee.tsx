"use client";
import { motion } from "framer-motion";

export function ThreeDMarquee({ images, className }: { images: string[]; className?: string }) {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });
  return (
    <div className={className || ""}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{ transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)" }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{ duration: colIndex % 2 === 0 ? 10 : 15, repeat: Infinity, repeatType: "reverse" }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                {subarray.map((image, imageIndex) => (
                  <motion.img
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    key={imageIndex + image}
                    src={image}
                    alt=""
                    className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                    width={970}
                    height={700}
                    loading="lazy"
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
