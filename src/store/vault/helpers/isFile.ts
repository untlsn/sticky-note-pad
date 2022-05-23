import File from '~/store/vault/parts/File';

type FileType = ReturnType<typeof File.create>;

export default function isFile(file: any): file is FileType {
  return file?.type == 'file';
}
