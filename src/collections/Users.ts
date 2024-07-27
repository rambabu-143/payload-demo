import Testcomp from '@/components/Testcomp'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

    {
      name: 'test',
      type: 'ui',
      admin: {
        components: {
          Field: Testcomp,
        },
      },
    },
  ],
}
