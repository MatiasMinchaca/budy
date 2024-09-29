import { defineDevConfig } from '@junobuild/config';

export default defineDevConfig(() => ({
  satellite: {
    collections: {
      storage: [
        {
          collection: 'pdfs',
          read: 'managed' as const,
          write: 'managed' as const,
          memory: 'stable' as const,
          mutablePermissions: true,
        },
      ],
      datastore: [
        {
          collection: 'pdfs',
          read: 'managed' as const,
          write: 'managed' as const,
          memory: 'stable' as const,
          mutablePermissions: true,
        },
      ],
    },
  },
}));
