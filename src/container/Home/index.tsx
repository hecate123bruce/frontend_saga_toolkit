import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  Container,
  Input,
  Button 
} from 'components/common';
import { Appactions, RootState } from 'store';
import { ITransaction } from 'type';

const initialTransaction: Omit<ITransaction, '_id'> = {
  senderId: '',
  recieverId: '',
  amount: 0
}

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState<number>();
  const [transaction, setTransaction] = useState<Omit<ITransaction, '_id'>>(initialTransaction);

  const { errors: userErrors } = useSelector((state: RootState) => state.user);
  const { errors: transactionErrors } = useSelector((state: RootState) => state.transaction);

  const changeTransaction = (e: any) => {
    setTransaction(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const createUser = () => {
    dispatch(Appactions.user.createUser({ 
      balance 
    }))
  }

  const createTransaction = () => {
    dispatch(Appactions.transaction.createTransaction(transaction))
  }

  const onClearLogger = () => {
    dispatch(Appactions.user.resetError());
    dispatch(Appactions.transaction.resetError());
  }

  return (
    <div>
      <Container>
      <div className="contents">
          <div className="userGroup">
            <div className='input-group'>
              <label>Balance</label>
              <Input className='' type='number' placeholder='balance' value={balance} onChange={e => setBalance(+e.target.value)} />
              <Button
                type='button'
                onClick={createUser}
              >
                Create new User
              </Button>
            </div>
            {/* <UsersTable /> */}
          </div>
          <div className="transactionGroup">
            <div className='input-group'>
              <span></span>
              <Input type='text' placeholder='sender ID' name='senderId' value={transaction.senderId || ''} onChange={e => changeTransaction(e)} />
              <Input type='text' placeholder='reciever ID' name='receiverId' value={transaction.recieverId} onChange={e => changeTransaction(e)} />
              <Input className='' type='number' placeholder='amount' name='' value={transaction.amount} onChange={e => changeTransaction(e)} />
              <Button
                type='button'
                onClick={createTransaction}
              >
                Send
              </Button>
            </div>
            {/* <TransactionsTable /> */}
          </div>
        </div>
        <div className='error-logger'>
          <p>Error Logger</p>
          <Button
            type='button'
            onClick={onClearLogger}
          >
            Clear
          </Button>
          <div className='errors'>
            <div className='user-errors'>
              {
                userErrors.length > 0 &&
                <>
                  <span>User Errors</span>
                  <ul>
                    {
                      userErrors.map((el, index) => <li key={index}>{el}</li>)
                    }
                  </ul>
                </>
              }
            </div>
            <div className='transaction-errors'>
              {
                transactionErrors.length > 0 &&
                <>
                  <span>Transaction Errors</span>
                  <ul>
                    {
                      transactionErrors.map((el, index) => <li key={index}>{el}</li>)
                    }
                  </ul>
                </>
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
