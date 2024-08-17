import QuoteForm from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

// import classes from "./no-scroll.module.css";
import { FaChevronRight } from "react-icons/fa";
import GalleryCarousel from "./gallery-carousel";
// type image = StaticImageData | string;
interface GalleryModalProps {
  logo: StaticImageData;
  images: { name: string; image: StaticImageData }[];
}

const GalleryModal = ({ logo, images }: GalleryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant="ghost" hideArrow>
          See Pictures <FaChevronRight className="text-color-orange " />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] ">
        <div
          className={cn(
            "overflow-y-auto overflow-x-hidden relative w-full h-full m-auto"
          )}
        >
          <DialogHeader className="mb-8">
            <DialogTitle className="mx-auto">
              <Image src={logo} alt="" className="w-[100px] rounded-xl " />
            </DialogTitle>

            <DialogDescription className="text-center">
              Short description goes here
            </DialogDescription>
          </DialogHeader>
          <GalleryCarousel images={images} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
