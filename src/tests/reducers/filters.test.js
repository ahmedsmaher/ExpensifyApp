import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default fitler values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 
    })
});

test('Should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount')
});

test('Should sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
    const text = 'something'
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text)
});

test('Should set startDate', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toBe(startDate)
});

test('Should set startDate', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toBe(endDate)
});