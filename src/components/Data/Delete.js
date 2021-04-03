import { useContext, useState } from 'react'
import { Dropdown, Icon, Modal } from 'semantic-ui-react'

import Context from '../../context'

const Delete = ({ id, title }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  const { deleteRecord } = useContext(Context)

  return (
    <Modal
      onClose={handleCloseDeleteModal}
      onOpen={handleOpenDeleteModal}
      open={openDeleteModal}
      size="tiny"
      trigger={
        <Dropdown.Item onClick={handleOpenDeleteModal}>
          <Icon color="grey" name="trash" />
          Delete
        </Dropdown.Item>
      }
      header="Are you sure?"
      content={`Are you sure to want delete "${title}" record?`}
      actions={[
        'No!',
        {
          key: 'done',
          content: 'Yes, delete it',
          positive: true,
          onClick: () => deleteRecord(id),
        },
      ]}
    />
  )
}

export default Delete
