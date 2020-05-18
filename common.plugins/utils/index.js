import getForm from '$common.utils/getForm';

export default function ({ $utils }) {
  const { _ } = $utils;
  $utils.add('getForm', getForm({$utils}));
}
