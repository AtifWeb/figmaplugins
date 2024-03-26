import { firebaseapp } from "@/config/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const uploadFileImage = (file, setfile) => {
  const storage = getStorage(firebaseapp);
  const storageRef = ref(storage, `plugins/${file["name"]}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  setfile({
    wait: true,
    value: null,
  });
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((URL) => {
          setfile({
            wait: false,
            value: URL,
          });
          console.log(URL);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
};
