import React from 'react';
import { Input, InputField, InputIcon } from '@gluestack-ui/themed';
import { Feather } from '@expo/vector-icons';

const SearchIcon = () => <Feather name="search" size={24} color="gray" />;

const SearchInput = () => {
  return (
    <Input
      className="w-full bg-white py-1 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-4 items-center flex-row opacity-50 hover:opacity-100"
    >
      <InputIcon as={SearchIcon} className="mr-4" />
      <InputField placeholder="Search ..." className="flex-1 py-3" />
    </Input>
  );
};

export default SearchInput;
