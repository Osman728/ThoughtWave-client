import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import Quill from "quill";

import "./Editor.scss";

import ImageUploader from "quill-image-uploader";

import "quill-image-uploader/dist/quill.imageUploader.min.css";

Quill.register("modules/imageUploader", ImageUploader);

const resolve = (arg) => {
  console.log(arg);
};

const Editor = ({ handleContentChange, handleImageAdd }) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      blotFormatter: {},
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            handleImageAdd(file);
            handleContentChange()
          });
        },
      },
    },
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldContents) => {
        console.log("Text change!");
        console.log(delta);

        const currentContents = quill.getContents();
        const insertedText = currentContents.ops
          .filter((op) => typeof op.insert === "string")
          .map((op) => op.insert)
          .join("");


        handleContentChange(insertedText);
      });
    }
  }, [quill]);

  return (
    <div>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
