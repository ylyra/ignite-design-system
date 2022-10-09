import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
  showWidth?: boolean;
}

const remToPixels = (rem: string) => {
  const remValue = parseFloat(rem);
  const htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return `${remValue * htmlFontSize}px`;
};

export function TokensGrid({ tokens, hasRemValue = false, showWidth = false }:TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {showWidth && <th></th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {hasRemValue && <td>{remToPixels(value)}</td>}
            {showWidth && (<td>
              <div className="tokens-grid__width" style={{ width: value }} />
            </td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}