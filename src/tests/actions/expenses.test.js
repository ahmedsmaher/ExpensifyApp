import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should edit my expense', () => {
    const action = editExpense('123abc', { note: 'New note value' } );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: 'New note value'
        }
    })
});

test('Should add an expense', () => {

    const expenseData = { 
        description: 'description value',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month rent'
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should add an expense with defaults', () => {
    const expenseData = { 
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});