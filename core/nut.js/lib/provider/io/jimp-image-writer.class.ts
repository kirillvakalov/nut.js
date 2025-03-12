import { ImageWriter, ImageWriterParameters } from "@kirillvakalov/nut-tree__provider-interfaces";
import { imageToJimp } from "@kirillvakalov/nut-tree__shared";

export default class implements ImageWriter {
  store(parameters: ImageWriterParameters): Promise<void> {
    return new Promise((resolve, reject) => {
      const jimpImage = imageToJimp(parameters.image);
      jimpImage
        .writeAsync(parameters.path)
        .then((_) => resolve())
        .catch((err) => reject(err));
    });
  }
}
