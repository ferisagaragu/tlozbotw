import * as react_redux from 'react-redux';
import { reducer as reducer_, Field as field, reduxForm as reduxForm_, SubmissionError as SubmissionError_ } from 'redux-form';

export const { Provider, connect } = react_redux;
export const reducerForm = reducer_;
export const Field = field;
export const reduxForm = reduxForm_;
export const SubmissionError = SubmissionError_;