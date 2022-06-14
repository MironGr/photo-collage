import { MainArea } from 'src/store/reducers/mainArea'
import { EditModal } from 'src/store/reducers/editModal'

export type State = {
  main: MainArea,
  editModal: EditModal,
}