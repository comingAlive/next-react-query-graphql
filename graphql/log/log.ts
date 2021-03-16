export const log = async (resolve, _parent, _args, _ctx, _info) => {
  try {
    return await resolve();
  } catch (e) {
    console.log(e);
  }
};
