import Folder from '~/store/vault/parts/Folder';

type FolderType = ReturnType<typeof Folder.create>;

export default function isFolder(file: any): file is FolderType {
  return file?.type == 'folder';
}
