import React from 'react';
import Button from '@atlaskit/button';
import CheckIcon from '@atlaskit/icon/glyph/check';

export default function Todo({todo, onCheckBtnClick}) {
    return <Button iconAfter={<span onClick={()=>onCheckBtnClick(todo.id)} className="check-icon"><CheckIcon primaryColor="#4fff4f"/></span>}>
        {todo.name}
        </Button>;
}