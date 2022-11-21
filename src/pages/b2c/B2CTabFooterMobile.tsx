import React from 'react';
import MenuTab from 'src/components/list/MenuTab';
import shopping from 'src/assets/images/jumia/icons/shopping.svg';
import account from 'src/assets/images/jumia/icons/account.png';
import home from 'src/assets/images/jumia/icons/home.png';
import Badge from 'src/components/badge/Badge';

const B2CTabFooterMobile = () => {
  return (
    <div className="tab-footer">
      <MenuTab type="horizontal">
        <MenuTab.Item name="home">
          <Badge number={0}>
            <img src={home} alt="icon" className="icon" /> Home
          </Badge>
        </MenuTab.Item>
        <MenuTab.Item name="basket">
          <Badge number={2}>
            <img src={shopping} alt="icon" className="icon" /> Basket
          </Badge>
        </MenuTab.Item>

        <MenuTab.Item name="account">
          <Badge number={0}>
            <img src={account} alt="icon" className="icon" /> Account
          </Badge>
        </MenuTab.Item>
      </MenuTab>
    </div>
  );
};

export default React.memo(B2CTabFooterMobile);
