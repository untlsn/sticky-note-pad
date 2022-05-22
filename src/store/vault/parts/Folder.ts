import {
  IMapType, IModelType, IType, ITypeUnion, types,
} from 'mobx-state-tree';
import File from '~/store/vault/parts/File';

type Folder = IModelType<{
  type: IType<'folder' | undefined, 'folder', 'folder'>,
  name: IType<string | undefined, string, string>
  files: IMapType<ITypeUnion<Folder | File, Folder | File, Folder | File>>
}, {}>

const Folder = types.model({
  type: 'folder',
  name: '',
  files: types.union(types.late(() => Folder), File),
}) as any as Folder;

export default Folder;
