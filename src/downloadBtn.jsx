import domtoimage from "dom-to-image-more";
import "./downloadBtn.css"
const DownloadButton = ({ targetRef }) => {
  const downloadImage = async () => {
    const node = targetRef.current;

    const scale = 3; // 🔍 increase scale for sharpness
    const style = getComputedStyle(node);
    const width = node.offsetWidth * scale;
    const height = node.offsetHeight * scale;

    const clonedStyle = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: `${node.offsetWidth}px`,
      height: `${node.offsetHeight}px`,
      border:`none`,
    };

    domtoimage
      .toPng(node, {
        width,
        height,
        style: clonedStyle,
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "qr.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download image", err);
      });
  };

  return <button className="download-btn" onClick={downloadImage}>Download</button>;
};

export default DownloadButton;
