import { useRef, useState } from "react";

import ImageTile from "./ImageTile";
import { BlogImageType } from "./types";
import { AppToast } from "@/lib/toast";

const MultipleImageUpload: React.FC<{
  Images: BlogImageType[];
  setImages: React.Dispatch<any>;
  setDataToSubmit: React.Dispatch<any>;
  title: string;
  isMultiple?: boolean;
  isEdit?: boolean;
}> = ({
  Images,
  setImages,
  setDataToSubmit,
  title,
  isEdit,
  isMultiple = false,
}) => {
  const pickRef = useRef();
  const [FileNames, setFileNames] = useState([]);
  //   const dispatch = useAppDispatch();

  // @ts-ignore
  const pick = () => pickRef?.current?.click();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    let files = (e.target as HTMLInputElement).files;
    const acceptableImages = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];
    //@ts-ignore
    const imageFiles: any[] = [...files];
    if (imageFiles.length > 6) {
      return AppToast({
        message: "You cannot upload more than 6 images.",
        duration: 6000,
      });
    }
    //   return dispatch(
    //     AddAlertMessage({ message: "You cannot upload more than 4 images." })
    //   );

    let newImages: any = [];
    let newFileNames: string[] = [];

    imageFiles.forEach((file) => newFileNames.push(file.name));

    imageFiles.forEach((file) => {
      if (!file) {
        return AppToast({
          message: "File does not exist",
          duration: 6000,
        });
      }

      const { size, type, name } = file;

      if (size > 1000000) {
        return AppToast({
          message: "Image too big. Should be less than 1MB",
          duration: 6000,
        });
      }

      if (!acceptableImages.includes(type)) {
        return AppToast({
          message: "Invalid image. Image should be .png, .jpg, .webp, or .jpeg",
          duration: 6000,
        });
      }

      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          newImages.push({ url: reader.result as string, size, type, name });

          if ([...Images, ...newImages].length > 6)
            return AppToast({
              message: "Maximum of 6 Images allowed.",
              duration: 6000,
            });

          // The if check prevents the same image from being added twice
          // @ts-ignore
          if (!FileNames.includes(file.name)) {
            setImages((prev: BlogImageType[]) => [
              ...prev,
              { url: reader.result as string, size, type, name },
            ]);

            // @ts-ignore
            setFileNames([...FileNames, ...newFileNames]);

            // setDataToSubmit((prev: any) => {
            //   return {
            //     ...prev,
            //     images: [
            //       ...prev.images,
            //       { url: reader.result as string, size, type, name },
            //     ],
            //   };
            // });
          } else {
            return AppToast({
              message: "Duplicate image detected",
              duration: 6000,
            });
          }
        }
        // @ts-ignore
        e.target.value = null;
      };
    });
  };

  return (
    <div className="h-[200px] w-full border-2 border-black border-dashed my-4 mx-auto rounded-md p-2 flex justify-center items-center bg-[#EEF0F4] ">
      {Images?.length > 0 && (
        <>
          <ImageTile
            Images={Images}
            setImages={setImages}
            isEdit={isEdit}
            setDataToSubmit={setDataToSubmit}
            setFileNames={setFileNames}
            onClick={pick}
          />
        </>
      )}
      {Images?.length === 0 && (
        <span onClick={pick} className="cursor-pointer">
          {title}
        </span>
      )}
      <input
        type="file"
        name="fileToUpload"
        onChange={handleOnChange}
        // @ts-ignore
        ref={pickRef}
        accept="image/*"
        multiple={isMultiple}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MultipleImageUpload;
