import React, { useEffect, useState } from 'react';
import { X, RefreshCw, Mail, Phone, Calendar, Database, CheckCircle } from 'lucide-react';
import { getInquiries, updateInquiryStatus } from '../services/api';

const AdminInboxModal = ({ isOpen, onClose, refreshTrigger }) => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await getInquiries();
      if (res && res.data) {
        setInquiries(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen, refreshTrigger]);

  if (!isOpen) return null;

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateInquiryStatus(id, newStatus);
      setStatusMessage('Status updated successfully in MongoDB');
      fetchInquiries();
      setTimeout(() => setStatusMessage(''), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Client Inquiries Inbox
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Live inquiries collection in MongoDB (<code className="text-brand-600">aarohan_technology.contacts</code>)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              title="Refresh MongoDB Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {statusMessage && (
          <div className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Content List */}
        <div className="overflow-y-auto flex-1 py-4 space-y-3">
          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500">
              <Database className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold">No inquiries in database yet.</p>
              <p className="text-xs mt-1">Submit an inquiry using the "Get in Touch" form to test live MongoDB storage!</p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq._id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-left space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {inq.fullName}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-brand-700 dark:text-brand-300">
                      {inq.service}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      Budget: {inq.budget || 'Undisclosed'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <select
                      value={inq.status || 'new'}
                      onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                      className="text-[11px] font-semibold px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                    >
                      <option value="new">🟢 New</option>
                      <option value="in-review">🟡 In Review</option>
                      <option value="contacted">🔵 Contacted</option>
                      <option value="completed">⚪ Completed</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Mail className="w-3.5 h-3.5 text-brand-500" />
                    <span>{inq.email}</span>
                  </span>
                  {inq.phone && (
                    <span className="flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{inq.phone}</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{new Date(inq.createdAt).toLocaleString()}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 whitespace-pre-wrap">
                  {inq.message}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminInboxModal;
