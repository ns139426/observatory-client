import { COLLECTION_MUTATIONS, MODEL_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// User Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...FILTER_MUTATIONS,
  ...MODEL_MUTATIONS
}
