import React, { useEffect, useState } from 'react'

type Quote = { content: string; author: string }

const QUOTES: Quote[] = [
  { content: "Do or do not. There is no try.", author: 'Yoda' },
  { content: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { content: 'Two things are infinite: the universe and human stupidity.', author: 'Albert Einstein' },
  { content: 'So many books, so little time.', author: 'Frank Zappa' },
  { content: 'A room without books is like a body without a soul.', author: 'Marcus Tullius Cicero' },
  { content: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
]

export default function App(): JSX.Element {
  const [quote, setQuote] = useState<Quote>(QUOTES[0])

  useEffect(() => {
	setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
  }, [])

  function newQuote() {
	setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
  }

	const styles: { [k: string]: React.CSSProperties } = {
		// Make the container always fill the viewport so background covers full screen
		container: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: '100vw',
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: '#f3f4f6',
			padding: 'clamp(0.75rem, 2.5vw, 2rem)',
			boxSizing: 'border-box',
			overflow: 'auto',
		},
		// Card uses a flexible width with a reasonable max so it looks good on TVs and phones
		card: {
			background: '#fff',
			padding: 'clamp(1rem, 2.5vw, 2rem)',
			borderRadius: 12,
			boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
			// Use a flexible width that caps at 900px and stays within the viewport
			width: 'min(900px, 90vw)',
			textAlign: 'center',
		},
		// Use clamp() so fonts scale between mobile and large screens
		quoteText: {
			fontSize: 'clamp(1rem, 2.6vw, 1.6rem)',
			lineHeight: 1.5,
			marginBottom: '0.75rem',
			color: '#111827',
			whiteSpace: 'pre-wrap',
			wordBreak: 'break-word',
		},
		author: {
			fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
			color: '#374151',
			marginBottom: '1rem',
			fontStyle: 'italic',
		},
		button: {
			background: '#2563eb',
			color: '#fff',
			border: 'none',
			padding: 'clamp(0.5rem, 1.2vw, 0.9rem) clamp(0.8rem, 2vw, 1.4rem)',
			borderRadius: 8,
			cursor: 'pointer',
			fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
			width: 'auto',
		},
		small: { fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', color: '#6b7280', marginTop: '0.75rem' },
	}

  return (
	<div style={styles.container}>
	  <div style={styles.card}>
		<div style={styles.quoteText}>“{quote.content}”</div>
		<div style={styles.author}>— {quote.author}</div>

		<button style={styles.button} onClick={newQuote}>
		  New Quote
		</button>

		<div style={styles.small}>Local quotes only</div>
	  </div>
	</div>
  )
}
