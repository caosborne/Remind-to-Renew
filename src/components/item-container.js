import React from 'react';
import ItemForm from './item-form';
import Profile from './profile';
import ItemTracker from './item-tracker';


class ItemContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
        <ItemForm />
        <ItemTracker />
      </div>
    );
  }
}

export default ItemContainer;
