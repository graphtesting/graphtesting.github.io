import React from 'react';

const styles = {
  dashboard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardContainer: {
    display: 'flex',
    alignSelf: 'flex-start',
    alignText: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardBtn: {
    margin: '10px',
    padding: '5px',
    paddingInline: '15px',
    fontSize: '18px',
    marginTop: '10px',
    border: 'none',
    color: 'white',
    backgroundColor: '#00000090',
  },
  dashboarBtnHover: {
    color: 'red',
  },
  dashboardDiv: {
    marginTop: '7px',
  },
  username: {
    margin: '5px',
    fontWeight: 'bold',
  },
};
interface Props {
  name: string;
  user: any;
  logout: () => void;
}
export default function index({ name, user, logout }: Props) {
  return (
    <div style={styles.dashboard}>
      <div style={styles.dashboardContainer}>
        <div>{`Welcome`}</div>
        <div style={styles.username}>{`${name}!`}</div>
        <button style={styles.dashboardBtn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
