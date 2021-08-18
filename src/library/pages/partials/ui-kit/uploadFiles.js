import React from "react";
import UploadFileCard, {FileType} from "../../../../common/components/common/UploadFileCard/UploadFileCard";



const UploadFiles = () => {

  return (
    <section className="components-library__element upload-file-library">
      <h3 className="components-library__heading h3">
        Upload file
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*M*/}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="1"><small>Color theme: default</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="name"></td>
          <td>
            <UploadFileCard fileType={FileType.IMAGE}
                            fieldFileName={`test`}
                            notUploadedText={`Загрузить скан инн`}
                            url={"/media/user-files/npgwgrygit-cheatsheet-ru.jpg"}
                            uploadFileAction={(formData, setProgress) => {
                              return new Promise((resolve, reject) => {
                                let progress = 0;
                                let timer = setInterval(() => {
                                  progress +=1
                                  if (progress <=100) setProgress(progress)
                                }, 20);
                                setTimeout(() => {
                                  clearInterval(timer)
                                  resolve("result");
                                }, 2000);
                              });
                            }}
                            abortUploadFileAction={() => ``}
                            downloadFileAction={() => ``}
                            deleteFileAction={() => ``}
            />
          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default UploadFiles;
