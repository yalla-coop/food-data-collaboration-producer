import nock from 'nock';

const interceptRequestRecorder = () => {
  if (process.env.NODE_ENV === 'test') return;
  return nock.recorder.rec({
    output_objects: false,
    enable_reqheaders_recording: true,
    logging: console.log,
    use_separator: true
  });
};

export default interceptRequestRecorder;
