'use strict';
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);
const fs = require('fs');

/**
 * 基于v3标准加密web3私钥的密钥库
 * @param string privateKey: 要加密的私钥.
 * @param string password: 用于加密的密码.
 * @return keyStoreObject: 加密的秘钥库json.
 * 例子：web3.eth.accounts.encrypt('apple purple xxx', '123456');
*/

const keyStoreJson = web3.eth.accounts.encrypt(privateKey, password);

fs.writeFile('./keystore.json', keyStoreJson, err => {
  console.error('keystore写入发生错误: ', err);
});
