import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

export const getDicebearAvatarSvg = (seed, size = 48) => {
  const value = (seed || 'User').toString().trim();
  const avatar = createAvatar(adventurer, {
    seed: value,
    size: size,
  });

  return avatar.toDataUri();
};
