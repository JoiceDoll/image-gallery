"use client";
import { UploadImages } from "./components/UploadImages";

export default function Gallery() {
  return (
    <div className="h-[100%] flex items-center justify-center">
      <div className="bg-white w-full max-w-[400px] rounded-[4px] p-[1%]">
        <UploadImages />
      </div>
    </div>
  );
}
