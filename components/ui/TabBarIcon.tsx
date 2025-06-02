import React from 'react';

export function TabBarIcon(props: {
  Icon: React.FC<{ width?: number; height?: number; fill?: string }>;
  focused: boolean;
}) {
  return (
    <props.Icon
      width={24}
      height={24}
      fill={props.focused ? '#007AFF' : '#8E8E93'}
    />
  );
}
