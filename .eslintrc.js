module.exports = {
    extends: 'airbnb-base',
    plugins: ['import'],
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    rules: {
        // 缩进调整为 4 空格，airbnb 为 2 空格
        indent: [2, 4, { SwitchCase: 1 }],
        'func-names': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        // 由于是 4 空格缩进，将每行最大长度放宽到 240，airbnb 为 100
        'max-len': [2, 240, 2, { ignoreUrls: true, ignoreComments: false }],
        // 不禁止 for in 循环
        'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        // 不禁止使用下划线作为变量名前缀
        'no-underscore-dangle': ['off'],
        // 不强制 return
        'consistent-return': ['off'],
        // 不强制使用 => 代替函数
        'prefer-arrow-callback': ['off'],
        // 不强制使用 camel case 命名
        camelcase: ['error'],
        // 允许修改参数
        'no-param-reassign': ['off'],
        // 不强制链式操作另起一行
        'newline-per-chained-call': ['off'],
        'no-unused-expressions': ['off'],
    },
};
