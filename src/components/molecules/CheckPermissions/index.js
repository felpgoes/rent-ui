import { useSelector } from 'react-redux';

function checkAuth({ checkRoles, permissions }, userRole, checkPermission) {
    if (userRole && !Object.values(checkRoles).includes(userRole)) {
        return false;
    }

    return true;
}

const Can = ({ children, checkRole, checkPermission }) => {
    const { usuario } = useSelector((state) => state.auth);
    return typeof children === 'function'
        ? children(
              checkAuth(
                  { checkRoles: checkRole, permissions: null },
                  usuario.role,
                  checkPermission
              )
          )
        : checkAuth(
              { checkRoles: checkRole, permissions: null },
              usuario.role,
              checkPermission
          ) && children;
};

export default Can;
