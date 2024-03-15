const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    },
    title: {
      fontSize: '1em',
      marginBottom: '10px'
    },
    description: {
      marginBottom: '10px'
    }
  };
  interface CardPageData extends Lume.Data {
    title: string;
    content: string;
  }
  export default ({ title, children }: CardPageData) => {
    return (
      <div style={styles.card}>
        {title && <div style={styles.title}>{title}</div>}
        {children}
      </div>
    );
  };