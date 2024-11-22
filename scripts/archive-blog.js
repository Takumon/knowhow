const fs = require('fs');
const archiver = require('archiver');


(function(){
  const destFileName = 'book-review-list';

  const destPath = (ext) =>  `${__dirname}/../${destFileName}.${ext}`;

  const genArchive = (output, archive) => {
    output.on('close', () => {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', (err) => {
      throw err;
    });

    archive.pipe(output);
    archive.directory('blog', 'blog', (file) => file.name.includes('book-review') ? file: false);
    archive.finalize();
  }


  genArchive(
    fs.createWriteStream(destPath('zip')),
    archiver('zip',{
      zlib: { level: 9 },
    })
  );

  genArchive(
    fs.createWriteStream(destPath('tar.gz')),
    archiver('tar',{
      gzip: true,
      gzipOptions: {
        level: 1,
      },
    })
  );

})();
