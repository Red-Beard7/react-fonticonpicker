import React from 'react';
import PropTypes from 'prop-types';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	markup,
	jsx,
	bash,
	scss,
} from 'react-syntax-highlighter/dist/esm/languages/prism';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('jsx', jsx);

SyntaxHighlighter.registerLanguage('js', jsx);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('scss', scss);

const CodeBlock = props => (
	<SyntaxHighlighter
		language={props.language || 'js'}
		style={tomorrow}
		customStyle={{
			maxHeight: '300px',
		}}
	>
		{props.value}
	</SyntaxHighlighter>
);

CodeBlock.displayName = 'codeBlock';
CodeBlock.propTypes = {
	value: PropTypes.string.isRequired,
	language: PropTypes.string,
	// inline: PropTypes.bool,
};
CodeBlock.defaultProps = {
	language: 'js',
	// inline: false,
};

export default CodeBlock;
