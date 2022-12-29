import axios from 'axios';

export const getPresignedURL: any = async (file: any) => {
  const form: any = new FormData();
  const s3BucketURL = 'https://photolog-bucket.s3.amazonaws.com/';

  const fileType = file.type.split('/')[1];

  const fieldsData = await axios
    .get(`http://34.64.34.184:5001/photos/presigned-url?filetype=${fileType}`)
    .then(async ({ data: { data } }) => {
      Object.keys(data.fields).forEach((key) => {
        form.append(key, data.fields[key]);
      });
      form.append('file', file);

      const s3ImgURL = await axios
        .post(s3BucketURL, form)
        .then((res: any) => res.headers.get('Location'))
        .then(async (locationUrl) => {
          const replacedLocationUrl = locationUrl.replace(
            'photolog-bucket.s3.amazonaws.com',
            'd20kh8audpilr9.cloudfront.net',
          );

          return axios.post(`http://34.64.34.184:5001/photos`, {
            url: replacedLocationUrl,
          });
        })
        .then(
          ({
            data: {
              data: { url, id },
            },
          }) => ({ url, id }),
        );

      return s3ImgURL;
    });

  return fieldsData;
};
