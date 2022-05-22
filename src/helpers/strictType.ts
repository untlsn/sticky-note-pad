import { IType } from 'mobx-state-tree';

export default function strictType<T extends string>(val: T) {
  return val as any as IType<T | undefined, T, T>;
}
