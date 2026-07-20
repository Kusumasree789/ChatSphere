import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

export const getDicebearAvatarSvg = (seed) => {
  const value = (seed || 'User').toString().trim();
  const avatar = createAvatar(adventurer, {
    seed: value,
    size: 64,
  });

  return avatar.toDataUri();
};
