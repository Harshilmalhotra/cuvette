import EditTopicForm from "/src/components/EditTopicForm"
import AdminNavbar from "/src/components/AdminNavbar"
import { Admin } from "mongodb"
export default function EditTopic() {
    return (
        <div>
            <h1>Edit Topic</h1>
            <AdminNavbar/>
            <EditTopicForm/>
        </div>
    )
}