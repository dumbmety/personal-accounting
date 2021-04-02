import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  Label,
  Segment,
  Select,
  TextArea,
} from 'semantic-ui-react'

import Context from '../../context'

const AddRecord = () => {
  // input state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [categories, setCategories] = useState('')

  // context
  const { addRecord, handleCloseAddModal } = useContext(Context)

  const newRecord = { title, description, amount, type, categories }

  return (
    <Container text>
      <Segment>
        <Header>Add new Record</Header>
        <div>
          <Form onSubmit={() => addRecord(newRecord)}>
            <Form.Group widths="equal">
              <Form.Field>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  placeholder="Enter record title ..."
                  onChange={e => setTitle(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  placeholder="Enter record description ..."
                  onChange={e => setDescription(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label htmlFor="amount">Amount</label>
                <Input labelPosition="right" type="text" placeholder="Amount">
                  <Label basic>$</Label>
                  <input id="amount" onChange={e => setAmount(e.target.value)} />
                  <Label>.00</Label>
                </Input>
              </Form.Field>
              <Form.Field>
                <label>Type</label>
                <Select
                  placeholder="Choose Type"
                  options={[
                    {
                      key: 'i',
                      text: 'Income',
                      value: 'income',
                      onClick: () => setType('income'),
                    },
                    { key: 'c', text: 'Cost', value: 'cost', onClick: () => setType('cost') },
                  ]}
                  value={type || null}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label htmlFor="categories">Categories</label>
              <TextArea
                id="categories"
                placeholder="Separate categories with commas"
                onChange={e => setCategories(e.target.value)}
              />
            </Form.Field>
          </Form>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/">
            <Button onClick={handleCloseAddModal}>Back</Button>
          </Link>
          <Button
            content="Add"
            labelPosition="right"
            icon="add"
            onClick={() => addRecord(newRecord)}
            positive
          />
        </div>
      </Segment>
    </Container>
  )
}

export default AddRecord
