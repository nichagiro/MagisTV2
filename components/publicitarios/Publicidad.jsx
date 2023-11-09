import moment from 'moment/moment';
import React, { useEffect } from 'react';
import PromoGeneral from './PromoGeneral';

const Publicidad = ({ date }) => {
  useEffect(() => {
    onStart()
  }, [])

  const onStart = () => {
    const now = moment().format('YYYY-MM-DD');
    const limitDate = moment(date);
    const visible = moment(now).isSameOrBefore(limitDate)
    if (visible) {
      setTimeout(() => {
        try {
          document.getElementById('btnPromo').click()
        } catch ({ message }) {
          console.log('promocion', message)
        }
      }, 3000);
    }
  }

  return <PromoGeneral />
}

export default Publicidad