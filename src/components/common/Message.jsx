import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Message = ({ messageError, messageSucces, isClosed }) => {
  return (
    <>
      {messageError && (
        <div
          className={`relative mb-4 p-3 ${
            messageSucces
              ? 'bg-green-100 border border-green-400 text-green-700'
              : 'bg-red-100 border border-red-400 text-red-700'
          } rounded`}
        >
          <button
            type="button"
            onClick={() => isClosed(false)}
            className="absolute right-1 top-1 bg-red-500 text-white  border border-red-500 hover:bg-white hover:text-red-500 cursor-pointer transition-colors"
          >
            <FaTimes size={24} />
          </button>
          <span>{messageError}</span>
        </div>
      )}
    </>
  )
}

Message.propTypes = {
  messageError: PropTypes.string.isRequired,
  messageSucces: PropTypes.string.isRequired,
  isClosed: PropTypes.func.isRequired,
}

export default Message
