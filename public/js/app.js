'use strict';
import BookManager from './BookManager.js';
import _ from 'lodash';

console.log(BookManager.getBook().name + _.join(['Hello','webpack'], ' '));
